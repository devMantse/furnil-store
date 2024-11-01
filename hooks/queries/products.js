import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios
        .get(`/products`, {

        })
        .then((res) => res.data);
      return response;
    }
  });
};



export const useGetProduct = (productid) => {
  return useQuery({
    queryKey: ["product", productid],
    queryFn: async () => {
      if (!productid) {
        throw new Error("Product ID is required");
      }
      try {
        const response = await axios.get(`/products/${productid}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching product:", error);
        throw error;
      }
    },
    enabled: !!productid
  });
};


