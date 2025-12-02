import supabase from "../lib/supabaseClient.js";

const TABLE = "tb_detail_mandor";

export const listMandor = async (req, res) => {
  try {
    const { data, error } = await supabase.from(TABLE).select("*");

    if (error) throw error;

    res.status(200).json({
      success: true,
      code: 200,
      message: "success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      code: 500,
      message: err.message,
    });
  }
};

export const getMandorById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id_mandor", id);

    if (error) throw error;

    if (data.length === 0 || !data)
      return res.status(404).json({
        success: false,
        code: 404,
        message: "Mandor not found",
      });

    res.json({
      success: true,
      code: 200,
      message: "success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      code: 500,
      message: err.message,
    });
  }
};
