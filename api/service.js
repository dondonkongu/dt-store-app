import BASE_URL from ".";

// Gửi yêu cầu tạo đơn hàng
export const createOrder = async (orderData) => {
  try {
    const response = await BASE_URL.post('/order/create', orderData);
    return response.data.result;
  } catch (error) {
    console.error('Error creating order', error);
    throw error;
  }
};