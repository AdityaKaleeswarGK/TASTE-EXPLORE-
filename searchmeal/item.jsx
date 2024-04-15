// Item.jsx
import React from 'react';

export default function item({ item }) { // Corrected prop name
  return (
    <li>{item.original}</li> // Corrected property name
  );
}
