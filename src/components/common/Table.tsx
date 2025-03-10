export default function Table({ children }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      {children}
    </table>
  );
}
