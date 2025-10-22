'use client';

import React from 'react';
import { Field, FieldAttributes } from 'formik';

export interface InputFieldProps
  extends FieldAttributes<any>,
    React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label?: string;
  as?: React.ElementType;
}

export default function InputField({
  label,
  id,
  as,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base color-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        as={as}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}
