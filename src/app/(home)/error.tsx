"use client";

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <div
      style={{
        padding: "10rem",
      }}
    >
      <h1>:C</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={reset}>Intentar de nuevo </button>
    </div>
  );
}
