import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SkillBar({ label, percent, color = "bg-primary" }) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="mb-4" ref={ref}>
      <label className="form-label">{label}</label>
      <div className="progress" style={{ width: "80%" }}>
        <motion.div
          className={`progress-bar ${color}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percent}%` : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {inView && `${percent}%`}
        </motion.div>
      </div>
    </div>
  );
}
