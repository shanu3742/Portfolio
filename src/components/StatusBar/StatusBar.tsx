import { useEffect, useState } from "react";
import APP_CONFIG from "../../app.config/config";

const STATUS_API =
  `${APP_CONFIG.server_url}/portfolio/api/v1/status`;

const STATUS_CONFIG: any = {
  Active: {
    label: "Active",
    color: "bg-green-500",
    ring: "ring-green-400",
    blink: true,
  },
  "In-active": {
    label: "Inactive",
    color: "bg-gray-500",
    ring: "ring-gray-400",
    blink: false,
  },
  "do not distrub": {
    label: "Do Not Disturb",
    color: "bg-red-500",
    ring: "ring-red-400",
    blink: true,
  },
};

export default function StatusBar() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchStatus = async () => {
    try {
      const res = await fetch(STATUS_API);
      const data = await res.json();
      setStatus(data?.status);
    } catch (err) {
      console.error("Failed to fetch status", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(fetchStatus, 4 * 60 * 1000); // 4 minutes
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-48 h-10 bg-gray-200 animate-pulse rounded-full" />
    );
  }

  const config = STATUS_CONFIG[status as any] || STATUS_CONFIG["In-active"];

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md shadow-lg border border-white/10">
      {/* Indicator */}
      <span
        className={`
          relative flex h-3 w-3
        `}
      >
        {config.blink && (
          <span
            className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${config.color}`}
          />
        )}
        <span
          className={`relative inline-flex rounded-full h-3 w-3 ${config.color} ring-2 ${config.ring}`}
        />
      </span>

      {/* Label */}
      <span className="text-sm font-medium text-white tracking-wide">
        {config.label}
      </span>
    </div>
  );
}
