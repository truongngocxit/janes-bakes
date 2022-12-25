export default function RadialCirle({ size, x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${y}%`,
        left: `${x}%`,
        width: `${size}rem`,
        height: `${size}rem`,
        background: "radial-gradient(var(--color-primary), transparent)",
        zIndex: "-1000",
        borderRadius: "50%",
        filter: "blur(10rem)",
      }}
    ></div>
  );
}
