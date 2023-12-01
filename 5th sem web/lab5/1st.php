<?php
function calculateDiscount($originalPrice, $discountPercentage) {
    // Ensure discountPercentage is a valid number between 0 and 100
    if (!is_numeric($originalPrice) || !is_numeric($discountPercentage) || $discountPercentage < 0 || $discountPercentage > 100) {
        return "Invalid input. Please provide valid numeric values for originalPrice and discountPercentage.";
    }

    // Calculate discounted price
    $discountedPrice = $originalPrice - ($originalPrice * ($discountPercentage / 100));

    // Round to 2 decimal places
    $discountedPrice = round($discountedPrice, 2);

    return $discountedPrice;
}

// Example usage:
$originalPrice = 100; // Replace with your original price
$discountPercentage = 20; // Replace with your discount percentage

$result = calculateDiscount($originalPrice, $discountPercentage);
echo "Discounted Price: $" . $result; ?>
