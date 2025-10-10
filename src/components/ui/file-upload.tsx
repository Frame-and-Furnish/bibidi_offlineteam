'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Upload, X, FileImage } from 'lucide-react';
import { Button } from './button';

interface FileUploadProps {
  value?: File | string | null;
  onChange: (file: File | null) => void;
  accept?: string;
  maxSize?: number; // in MB
  preview?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export function FileUpload({
  value,
  onChange,
  accept = 'image/*',
  maxSize = 5,
  preview = true,
  disabled = false,
  className,
  label = 'Upload file',
}: FileUploadProps) {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (value instanceof File) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(value);
    } else if (typeof value === 'string' && value) {
      setPreviewUrl(value);
    } else {
      setPreviewUrl(null);
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);

    if (!file) {
      return;
    }

    // Check file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File size must be less than ${maxSize}MB`);
      return;
    }

    onChange(file);
  };

  const handleRemove = () => {
    onChange(null);
    setPreviewUrl(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className={cn('space-y-2', className)}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
      />

      {previewUrl && preview ? (
        <div className="relative inline-block">
          <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          {!disabled && (
            <Button
              type="button"
              variant="destructive"
              size="icon-sm"
              className="absolute -top-2 -right-2 rounded-full"
              onClick={handleRemove}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      ) : (
        <div
          onClick={handleClick}
          className={cn(
            'flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors',
            disabled
              ? 'bg-gray-50 cursor-not-allowed'
              : 'hover:bg-gray-50 border-gray-300 hover:border-gray-400',
            error && 'border-red-500'
          )}
        >
          <div className="flex flex-col items-center justify-center py-4 px-4 text-center">
            {preview ? (
              <FileImage className="w-8 h-8 mb-2 text-gray-400" />
            ) : (
              <Upload className="w-8 h-8 mb-2 text-gray-400" />
            )}
            <p className="text-sm text-gray-600">
              <span className="font-semibold">{label}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Max size: {maxSize}MB
            </p>
          </div>
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
      
      {value instanceof File && (
        <div className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm">
          <span className="text-gray-700 truncate">{value.name}</span>
          {!disabled && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={handleRemove}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

