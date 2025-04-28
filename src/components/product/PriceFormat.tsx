
import React from "react";

interface PriceFormatProps {
  amount: number;
  originalPrice?: number;
  className?: string;
}

export function PriceFormat({ amount, originalPrice, className }: PriceFormatProps) {
  // Format the price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const discount = originalPrice ? Math.round(((originalPrice - amount) / originalPrice) * 100) : 0;

  return (
    <div className={className}>
      <span className="font-medium text-lg">{formatPrice(amount)}</span>
      {originalPrice && originalPrice > amount && (
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm line-through">
            {formatPrice(originalPrice)}
          </span>
          <span className="text-green-600 text-sm font-medium">
            {discount}% off
          </span>
        </div>
      )}
    </div>
  );
}
