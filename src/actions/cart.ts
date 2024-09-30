"use server";

import { sleep } from "@/utils";

const carts: { productId: number }[] = [];

export const addToCartAction = async (
  _: { success: boolean } | null,
  formData: FormData
) => {
  await sleep(3000);
  carts.push({
    productId: Number(formData.get("productId")),
  });

  return {
    success: true,
  };
};
