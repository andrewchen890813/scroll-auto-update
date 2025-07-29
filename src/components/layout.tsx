import { PropsWithChildren } from "react";
import LinkButton from "./LinkButton";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full bg-white border-b shadow-sm">
        <div className="max-w-3xl  mx-auto h-16 flex items-center px-4 justify-between">
          <h1 className="text-lg font-semibold text-gray-800">
            我的無限
            <span className="whitespace-pre">捲動作業</span>
          </h1>
          <div className="flex gap-4">
            <LinkButton to="/observer" label="Observer" />
            <LinkButton to="/scroll" label="Scroll" />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow w-full bg-white">
        <div className="max-w-3xl  mx-auto px-4 py-8">{children}</div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-gray-50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-800 ">
          <p>© 2025 作業 by 陳彥佐</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
