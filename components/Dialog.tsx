import React, { useEffect, useRef } from 'react';
import { FaX } from 'react-icons/fa6';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in">
      <div 
        ref={dialogRef}
        className="bg-white rounded-lg shadow-lg w-full max-w-md relative p-6 animate-zoom-in"
      >
        {title && <h2 className="text-xl font-medium text-center mb-4">{title}</h2>}
        
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100"
        >
          <FaX size={20} />
          <span className="sr-only">Close</span>
        </button>
        
        {children}
      </div>
    </div>
  );
};

export default Dialog;
