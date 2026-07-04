import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Sparkles, Music, HelpCircle, ArrowUpRight } from "lucide-react";

// Frequencies from E Major Pentatonic scale (peaceful, celestial bell tones)
const CELESTIAL_NOTES = [659.25, 739.99, 830.61, 987.77, 1108.73, 1318.51]; // E5, F#5, G#5, B5, C#6, E6

export default function CelestialAudio() {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    const saved = localStorage.getItem("celestial_audio_muted");
    return saved ? saved === "true" : false;
  });
  
  // Extra Idea 1: Cosmic Drone Ambience Toggle
  const [isDroneActive, setIsDroneActive] = useState<boolean>(() => {
    const saved = localStorage.getItem("celestial_drone_active");
    return saved ? saved === "true" : true;
  });

  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastActiveElRef = useRef<HTMLElement | null>(null);
  const lastPlayTimeRef = useRef<number>(0);

  // References for ambient drone synthesis
  const droneOsc1Ref = useRef<OscillatorNode | null>(null);
  const droneOsc2Ref = useRef<OscillatorNode | null>(null);
  const droneLfoRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);

  // Toggle general audio muted state
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem("celestial_audio_muted", String(nextMuted));
    
    if (!nextMuted) {
      setTimeout(() => {
        playCelestialChime(830.61, 0.02); // Warm G#5 confirmation tone
      }, 50);
      if (isDroneActive) {
        startAmbientDrone();
      }
    } else {
      stopAmbientDrone();
    }
  };

  // Toggle ambient drone state
  const toggleDrone = () => {
    if (isMuted) {
      // If muted, unmute first
      setIsMuted(false);
      localStorage.setItem("celestial_audio_muted", "false");
    }

    const nextDrone = !isDroneActive;
    setIsDroneActive(nextDrone);
    localStorage.setItem("celestial_drone_active", String(nextDrone));

    if (nextDrone) {
      setTimeout(() => {
        startAmbientDrone();
        playSuccessArpeggio();
      }, 50);
    } else {
      stopAmbientDrone();
      playCelestialChime(659.25, 0.015); // soft tone on turn off
    }
  };

  // Initialize Audio Context safely
  const initAudioContext = (): AudioContext | null => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return null;
      audioCtxRef.current = new AudioContextClass();
    }
    const audioCtx = audioCtxRef.current;
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  };

  // Synthesize a soft, celestial bell/harp chime
  const playCelestialChime = (freq?: number, customVolume?: number) => {
    if (isMuted) return;
    try {
      const audioCtx = initAudioContext();
      if (!audioCtx) return;

      // Throttle play rate slightly to prevent audio clutter on rapid movement
      const now = audioCtx.currentTime;
      if (now - lastPlayTimeRef.current < 0.07) {
        return;
      }
      lastPlayTimeRef.current = now;

      const frequency = freq || CELESTIAL_NOTES[Math.floor(Math.random() * CELESTIAL_NOTES.length)];
      const volume = customVolume !== undefined ? customVolume : 0.012; // extremely soft, subtle

      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, now);
      osc.frequency.exponentialRampToValueAtTime(frequency * 0.99, now + 0.3);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1400, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(volume, now + 0.004); // fast 4ms attack
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.28); // smooth decay

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (err) {
      console.warn("Celestial audio failed to play:", err);
    }
  };

  // Tactile Click: plays a warm celestial double-tone perfect-fifth chord
  const playClickChime = () => {
    if (isMuted) return;
    try {
      const audioCtx = initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      
      // We play E5 (659.25 Hz) and B5 (987.77 Hz) for a perfect fifth celestial harmony
      const frequencies = [659.25, 987.77];
      
      frequencies.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.985, now + 0.5);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1600, now);

        gainNode.gain.setValueAtTime(0, now);
        // Slightly different volumes to balance high/low notes
        const vol = idx === 0 ? 0.015 : 0.012;
        gainNode.gain.linearRampToValueAtTime(vol, now + 0.005);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.45); // longer decay

        osc.start(now);
        osc.stop(now + 0.5);
      });
    } catch (err) {
      console.warn("Click chime failed:", err);
    }
  };

  // Tactile Droplet: A tiny, satisfying crystalline water droplet sound for form keyboard inputs
  const playDropletTick = () => {
    if (isMuted) return;
    try {
      const audioCtx = initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      
      // Randomize pitch slightly to simulate physical diversity
      const freq = 2000 + Math.random() * 800; 

      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq, now);
      filter.Q.setValueAtTime(12, now); // high resonance for "plip" sound

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.003, now + 0.002); // tiny volume spike
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.035); // extremely fast 35ms decay

      osc.start(now);
      osc.stop(now + 0.04);
    } catch (err) {
      // quiet fail for fast keyboard triggers
    }
  };

  // Ascending Celestial Arpeggio: used for successful actions (form submission, drone launch)
  const playSuccessArpeggio = () => {
    if (isMuted) return;
    try {
      const audioCtx = initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      // Beautiful ascending major scale chimes
      const sequence = [523.25, 659.25, 783.99, 987.77, 1318.51]; // C5, E5, G5, B5, E6
      
      sequence.forEach((freq, idx) => {
        const timeDelay = idx * 0.06; // staggered waterfall delay
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + timeDelay);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1800, now + timeDelay);

        gainNode.gain.setValueAtTime(0, now + timeDelay);
        gainNode.gain.linearRampToValueAtTime(0.015, now + timeDelay + 0.004);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + timeDelay + 0.4);

        osc.start(now + timeDelay);
        osc.stop(now + timeDelay + 0.4);
      });
    } catch (err) {
      console.warn("Success arpeggio failed:", err);
    }
  };

  // Swell effect for spatial events like modal open/close
  const playSwell = (direction: "open" | "close") => {
    if (isMuted) return;
    try {
      const audioCtx = initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc.type = "sine";
      
      if (direction === "open") {
        // Uplifting celestial frequency swipe
        osc.frequency.setValueAtTime(330, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.4);
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.018, now + 0.15);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      } else {
        // Calming cosmic descent
        osc.frequency.setValueAtTime(660, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.4);
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.012, now + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      }

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(900, now);

      osc.start(now);
      osc.stop(now + 0.5);
    } catch (err) {
      console.warn("Swell sound failed:", err);
    }
  };

  // Start Cosmic Space Hum Drone
  const startAmbientDrone = () => {
    if (isMuted) return;
    try {
      const audioCtx = initAudioContext();
      if (!audioCtx) return;

      const now = audioCtx.currentTime;

      // Ensure clean start (stop current if exists)
      stopAmbientDrone();

      // Create low frequency warmth oscillators (deep cosmic drone chords)
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const lfo = audioCtx.createOscillator();
      
      const droneGain = audioCtx.createGain();
      const droneFilter = audioCtx.createBiquadFilter();
      const lfoGain = audioCtx.createGain();

      // Connections: Oscillators -> Lowpass Filter -> Volume Gain -> Speakers
      osc1.connect(droneFilter);
      osc2.connect(droneFilter);
      droneFilter.connect(droneGain);
      droneGain.connect(audioCtx.destination);

      // Low frequency oscillator (LFO) modulates filter frequency to create celestial organic wind breathing
      lfo.connect(lfoGain);
      lfoGain.connect(droneFilter.frequency);

      // Set drone frequencies (E2 & B2 for a resonant perfect fifth space floor)
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(82.41, now); // E2
      
      osc2.type = "triangle"; // soft triangles add warm overtones
      osc2.frequency.setValueAtTime(123.47, now); // B2

      // LFO modulation configuration (slow cosmic drift wave at 0.15 Hz)
      lfo.type = "sine";
      lfo.frequency.setValueAtTime(0.15, now);
      lfoGain.gain.setValueAtTime(35, now); // drift filter cutoff frequency by +/- 35Hz

      // Filter settings (very low cutoff to keep it deep, ambient, and non-distracting)
      droneFilter.type = "lowpass";
      droneFilter.frequency.setValueAtTime(130, now);
      droneFilter.Q.setValueAtTime(2.5, now);

      // Volume envelope: ultra slow fade-in so it doesn't startle the user (3 second attack)
      droneGain.gain.setValueAtTime(0, now);
      droneGain.gain.linearRampToValueAtTime(0.012, now + 3.0); // kept at a pristine background level

      // Save references for dynamic stop
      osc1.start(now);
      osc2.start(now);
      lfo.start(now);

      droneOsc1Ref.current = osc1;
      droneOsc2Ref.current = osc2;
      droneLfoRef.current = lfo;
      droneGainRef.current = droneGain;
    } catch (err) {
      console.warn("Could not start ambient space drone:", err);
    }
  };

  // Stop Cosmic Space Hum Drone
  const stopAmbientDrone = () => {
    try {
      const now = audioCtxRef.current?.currentTime || 0;
      
      // Graceful slow volume release before cutoff
      if (droneGainRef.current && audioCtxRef.current) {
        droneGainRef.current.gain.cancelScheduledValues(now);
        droneGainRef.current.gain.setValueAtTime(droneGainRef.current.gain.value, now);
        droneGainRef.current.gain.linearRampToValueAtTime(0, now + 0.8); // 800ms graceful fadeout
      }

      // Hard stop after fadeout
      setTimeout(() => {
        if (droneOsc1Ref.current) {
          try { droneOsc1Ref.current.stop(); } catch (e) {}
          droneOsc1Ref.current = null;
        }
        if (droneOsc2Ref.current) {
          try { droneOsc2Ref.current.stop(); } catch (e) {}
          droneOsc2Ref.current = null;
        }
        if (droneLfoRef.current) {
          try { droneLfoRef.current.stop(); } catch (e) {}
          droneLfoRef.current = null;
        }
        droneGainRef.current = null;
      }, 850);
    } catch (err) {
      // already stopped
    }
  };

  useEffect(() => {
    // Start ambient drone if active in preferences
    if (isDroneActive && !isMuted) {
      // Delay slightly to ensure browser loaded fully
      const t = setTimeout(() => {
        startAmbientDrone();
      }, 1000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    // ── Global Event Delegation listeners for supreme tactile UX ──

    // 1. Mouseover (Hover)
    const handleMouseOver = (e: MouseEvent) => {
      if (isMuted) return;

      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest(
        'a, button, [role="button"], .cursor-pointer, input[type="submit"], input[type="button"], .interactive-hover, [role="tab"]'
      ) as HTMLElement | null;

      if (!interactiveEl) {
        lastActiveElRef.current = null;
        return;
      }

      if (lastActiveElRef.current === interactiveEl) {
        return;
      }

      lastActiveElRef.current = interactiveEl;
      playCelestialChime();
    };

    const handleMouseLeave = () => {
      lastActiveElRef.current = null;
    };

    // 2. Click feedback
    const handleClick = (e: MouseEvent) => {
      if (isMuted) return;

      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest(
        'a, button, [role="button"], .cursor-pointer, input[type="submit"], input[type="button"], [role="tab"]'
      ) as HTMLElement | null;

      if (interactiveEl) {
        playClickChime();
      }
    };

    // 3. Typing keystrokes (droplets) in form inputs/textarea & Handling Celestial Hotkeys
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTyping = activeEl && (
        activeEl.tagName === "INPUT" ||
        activeEl.tagName === "TEXTAREA" ||
        activeEl.hasAttribute("contenteditable") ||
        (activeEl as HTMLElement).isContentEditable
      );

      if (isTyping) {
        if (!isMuted && e.key !== "Shift" && e.key !== "Control" && e.key !== "Alt" && e.key !== "Meta" && e.key !== "Enter") {
          playDropletTick();
        }
        return;
      }

      // ── Global Keyboard Hotkeys ──
      const key = e.key.toLowerCase();
      if (key === "m") {
        e.preventDefault();
        toggleMute();
      } else if (key === "d") {
        e.preventDefault();
        toggleDrone();
      }
    };

    // 4. Form Submit Success chord
    const handleFormSubmit = (e: SubmitEvent) => {
      if (isMuted) return;
      playSuccessArpeggio();
    };

    // 5. Watch for modal openings dynamically using MutationObserver
    const observer = new MutationObserver((mutations) => {
      if (isMuted) return;
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            // Check if added element is a modal, dialog or backdrop overlay
            if (node.getAttribute("role") === "dialog" || node.id === "resume-modal-overlay" || node.className.includes("fixed inset-0")) {
              playSwell("open");
            }
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.getAttribute("role") === "dialog" || node.id === "resume-modal-overlay" || node.className.includes("fixed inset-0")) {
              playSwell("close");
            }
          }
        });
      });
    });

    // Register listeners
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("submit", handleFormSubmit);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("submit", handleFormSubmit);
      observer.disconnect();
      stopAmbientDrone();
    };
  }, [isMuted, isDroneActive]);

  return (
    <div className="fixed bottom-6 left-6 z-[9990] flex items-center gap-3">
      {/* Sound System Button */}
      <div 
        className="relative"
        onMouseEnter={() => setShowTooltip("sounds")}
        onMouseLeave={() => setShowTooltip(null)}
      >
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Enable celestial sounds" : "Mute celestial sounds"}
          className="relative w-11 h-11 flex items-center justify-center rounded-full border bg-white/60 dark:bg-slate-950/50 backdrop-blur-md transition-all duration-300 border-[#E8E0D7] dark:border-slate-800/80 shadow-[0_8px_30px_rgb(28,19,16,0.05)] hover:border-solar-orange/60 dark:hover:border-amber-500/60 group cursor-pointer"
        >
          {!isMuted && (
            <span className="absolute inset-0 rounded-full bg-solar-orange/5 animate-ping opacity-60 pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            {isMuted ? (
              <motion.div
                key="muted"
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ duration: 0.15 }}
                className="text-slate-400 dark:text-slate-500"
              >
                <VolumeX className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="playing"
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                transition={{ duration: 0.15 }}
                className="text-solar-orange dark:text-amber-500"
              >
                <Volume2 className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>

          {!isMuted && (
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] text-white shadow-sm">
              <Sparkles className="w-2 h-2 animate-pulse" />
            </span>
          )}
        </button>

        {/* Hover Tooltip/Badge */}
        <AnimatePresence>
          {showTooltip === "sounds" && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white/95 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.16em] shadow-lg pointer-events-none"
            >
              <span className={isMuted ? "text-slate-500 dark:text-slate-400" : "text-solar-orange dark:text-amber-500"}>
                {isMuted ? "Sounds Off" : "Sounds On (Bell & Click)"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Extra Idea: Cosmic Space Drone Ambience Control */}
      <div 
        className="relative"
        onMouseEnter={() => setShowTooltip("drone")}
        onMouseLeave={() => setShowTooltip(null)}
      >
        <button
          onClick={toggleDrone}
          aria-label={isDroneActive ? "Mute Space Hum" : "Unmute Space Hum"}
          className={`relative w-11 h-11 flex items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 shadow-[0_8px_30px_rgb(28,19,16,0.05)] cursor-pointer ${
            isDroneActive && !isMuted
              ? "bg-gradient-to-br from-[#FF8A4B]/10 to-[#D84C1B]/10 border-solar-orange text-solar-orange dark:text-amber-400"
              : "bg-white/60 dark:bg-slate-950/50 border-[#E8E0D7] dark:border-slate-800/80 text-slate-400 dark:text-slate-500"
          }`}
        >
          {isDroneActive && !isMuted && (
            <span className="absolute inset-0 rounded-full bg-amber-500/15 animate-ping opacity-70 pointer-events-none" />
          )}

          <Music className={`w-4 h-4 ${isDroneActive && !isMuted ? "animate-pulse" : ""}`} />
        </button>

        {/* Hover Tooltip/Badge for Ambient Space Hum */}
        <AnimatePresence>
          {showTooltip === "drone" && (
            <motion.div
              initial={{ opacity: 0, x: 12, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-xl border border-slate-100 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-black uppercase tracking-[0.16em] shadow-lg pointer-events-none"
            >
              <span className={isDroneActive && !isMuted ? "text-solar-orange dark:text-amber-500" : "text-slate-500"}>
                {isDroneActive && !isMuted ? "Space Hum On" : "Space Hum Off"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
