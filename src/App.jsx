import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Cookie from "./pages/Cookie";
import Terms from "./pages/Terms";
import Security from "./pages/Security";
import AiPolicy from "./pages/AiPolicy";
import Licenza from "./pages/Licenza";
import Changelog from "./pages/Changelog";
import Roadmap from "./pages/Roadmap";
import GdprB2b from "./pages/GdprB2b";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Salta al contenuto principale
      </a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/termini" element={<Terms />} />
        <Route path="/security" element={<Security />} />
        <Route path="/ai-policy" element={<AiPolicy />} />
        <Route path="/licenza" element={<Licenza />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/gdpr-b2b" element={<GdprB2b />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
