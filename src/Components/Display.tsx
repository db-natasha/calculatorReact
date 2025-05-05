
import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div className="border border-gray-600 p-4 text-right text-2xl bg-gray-900 rounded-md max-w-[500px] min-w-[250px]">
      {value}
    </div>
  );
};

export default Display;