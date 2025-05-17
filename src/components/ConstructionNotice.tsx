import { useTranslation } from 'react-i18next';

export default function ConstructionNotice() {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white px-6 py-4 rounded-lg shadow-lg backdrop-blur-sm border border-white/10 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6 text-yellow-400 animate-pulse">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" 
          />
        </svg>
        <p className="font-light">
          {t('notification.construction')}
        </p>
      </div>
    </div>
  );
} 