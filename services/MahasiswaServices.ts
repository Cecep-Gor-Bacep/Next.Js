import { createClient } from "@/utils/supabase/client";

export async function getAllMahasiswa() {
  const supabase = createClient();
  const { data: data_mhs, error } = await supabase.from("data_mhs").select("NIM");

  if(error) throw Error;
  return data_mhs;
}
