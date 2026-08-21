import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
          error: <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />,
          warning: <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />,
          info: <Info className="w-5 h-5 text-spiritual-gold-600 shrink-0" />
        };

        const bgColors = {
          success: 'border-emerald-200 bg-white shadow-lg',
          error: 'border-rose-200 bg-white shadow-lg',
          warning: 'border-amber-200 bg-white shadow-lg',
          info: 'border-spiritual-gold-200 bg-white shadow-lg'
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border ${bgColors[toast.type]} transition-all transform animate-slide-up shadow-spiritual`}
            role="alert"
          >
            {icons[toast.type]}
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-spiritual-earth-900 font-sans">
                {toast.title}
              </h4>
              {toast.message && (
                <p className="text-xs text-spiritual-earth-600 mt-0.5 line-clamp-2">
                  {toast.message}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-spiritual-earth-400 hover:text-spiritual-earth-700 p-0.5 rounded transition-colors"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
