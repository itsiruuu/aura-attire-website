import React from 'react';
import { useStore } from '../context/StoreContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const Toast = () => {
  const { toast } = useStore();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500" />,
    info: <Info className="w-5 h-5 text-[#FA6651]" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 bg-neutral-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-neutral-700/60 max-w-md">
        {icons[toast.type] || icons.success}
        <span className="text-sm font-medium">{toast.message}</span>
      </div>
    </div>
  );
};

export default Toast;
