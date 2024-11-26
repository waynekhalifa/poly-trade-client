import { Flip as Animation } from "react-awesome-reveal";

interface Props {
  children: React.ReactNode;
  animation: any;
}

const Animate: React.FC<Props> = ({ animation, children }) => {
  const {
    direction,
    damping,
    delay,
    duration,
    fraction,
    triggerOnce,
    cascade,
  } = animation;

  return (
    <Animation
      direction={direction ? direction : undefined}
      damping={damping}
      delay={delay}
      duration={duration}
      fraction={fraction}
      triggerOnce={triggerOnce}
      cascade={cascade}
    >
      {children}
    </Animation>
  );
};

export default Animate;
