export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <nav>LayoutLocal - Navegacion de las categorias</nav>
      {children}
    </main>
  );
}
