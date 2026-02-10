import { createClient } from "@/utils/supabase/client";

export async function getAllMahasiswa() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("data_mhs")
    .select("*")
    .order("nama", { ascending: true });

  if (error) throw Error;
  return data;
}
