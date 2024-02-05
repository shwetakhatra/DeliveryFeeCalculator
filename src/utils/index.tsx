// Calculate small order surcharge
function calculateSmallOrderSurcharge(cartValue: number): number {
    const smallOrderSurchargeThreshold = 10;
    const smallSurcharge = Math.max(0, smallOrderSurchargeThreshold - cartValue);
    return parseFloat(smallSurcharge.toFixed(2));
}
// Calculate distance fee
function calculateDistanceFee(deliveryDist: number): number {
    const baseFee = 2;
    const additionalDistanceFee = 1;
    const additionalDistance = Math.max(0, deliveryDist - 1000);
    return baseFee + Math.ceil(additionalDistance / 500) * additionalDistanceFee;
}
// Calculate items surcharge
function calculateItemsSurcharge(numOfItems: number): number {
    const bulkSurchargeThreshold = 4;
    const itemsSurcharge = 0.5;
    const itemsSurchargeCount = Math.max(0, numOfItems - bulkSurchargeThreshold);
    return itemsSurchargeCount * itemsSurcharge;
}
// Calculate bulk surcharge
function calculateBulkSurcharge(numOfItems: number): number {
    const bulkSurcharge = 1.2;
    return numOfItems > 12 ? bulkSurcharge : 0;
}
// Check if it's Friday rush (3 - 7 PM)
function calculateFridayRushMultiplier(time: string): number {
    const formValuesTimeDate = new Date(time);
    const currentDay = formValuesTimeDate.getDay();
    const currentHour = formValuesTimeDate.getHours();
    const isFridayRush = currentDay === 5 && currentHour >= 15 && currentHour <= 19;
    return isFridayRush ? 1.2 : 1;
}
// Ensure the total fee does not exceed the maximum 15€
function applyMaxDeliveryFee(totalFee: number, maxDeliveryFee: number): number {
    return Math.min(totalFee, maxDeliveryFee);
}
// Free delivery if the cart value is equal or more than 200€
function checkFreeDelivery(totalFee: number, cartValue: number, freeDeliveryThreshold: number): number {
    return cartValue >= freeDeliveryThreshold ? 0 : totalFee;
}
// Calculate total delivery charge
export function calculateDeliveryFee(formValues: { [key: string]: string | number }) {
    const cartValue = parseFloat(formValues.cartValue as string);
    const deliveryDist = parseFloat(formValues.deliveryDist as string);
    const numOfItems = parseFloat(formValues.numOfitem as string);
    const maxDeliveryFee = 15;
    const freeDeliveryThreshold = 200;
    let totalFee = 0;
    if(cartValue < freeDeliveryThreshold){
        const smallOrderSurcharge = calculateSmallOrderSurcharge(cartValue);
        const distanceFee = calculateDistanceFee(deliveryDist);
        const itemsSurchargeAmount = calculateItemsSurcharge(numOfItems);
        const bulkSurchargeAmount = calculateBulkSurcharge(numOfItems);
        // Calculate total fee before Friday rush
        totalFee = smallOrderSurcharge + distanceFee + itemsSurchargeAmount + bulkSurchargeAmount;
        const fridayRushMultiplier = calculateFridayRushMultiplier(formValues.time as string);
        totalFee *= fridayRushMultiplier;
        totalFee = applyMaxDeliveryFee(totalFee, maxDeliveryFee);
        totalFee = checkFreeDelivery(totalFee, cartValue, freeDeliveryThreshold);
    }    
    return parseFloat(totalFee.toFixed(2));
}
  