import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { FinalReportPage } from "./pages/FinalReportPage";
import { HomePage } from "./pages/HomePage";
import { InfographicPage } from "./pages/InfographicPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ReflectionPage } from "./pages/ReflectionPage";
import { TopicDetailPage } from "./pages/TopicDetailPage";
import { TopicsPage } from "./pages/TopicsPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/topik" element={<TopicsPage />} />
        <Route path="/topik/:topicId" element={<TopicDetailPage />} />
        <Route path="/infografis" element={<InfographicPage />} />
        <Route path="/laporan-akhir" element={<FinalReportPage />} />
        <Route path="/refleksi" element={<ReflectionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
