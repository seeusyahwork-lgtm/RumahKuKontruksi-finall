//* src/controllers/projectsController.js
import supabase from "../lib/supabaseClient.js";

const TABLE = "tb_proyek"; // sesuaikan kalau beda

export const listProjects = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false });

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

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .eq("id_proyek", id);

    if (error) throw error;

    if (data.length === 0 || !data)
      return res.status(404).json({
        success: false,
        code: 404,
        message: "Project not found",
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

//! nunggu alur
// export const createProject = async (req, res, next) => {
//   try {
//     const payload = req.body;
//     const { data, error } = await supabase.from(TABLE).insert(payload);
//     if (error) throw error;
//     res.status(201).json({ data });
//   } catch (err) {
//     next(err);
//   }
// };

//! nunggu alur
// export const updateProject = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;
//     const { data, error } = await supabase
//       .from(TABLE)
//       .update(updates)
//       .eq("id", id)
//       .select()
//       .single();

//     if (error) throw error;
//     res.json({ data });
//   } catch (err) {
//     next(err);
//   }
// };

//! nunggu alur
// export const deleteProject = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { data, error } = await supabase
//       .from(TABLE)
//       .delete()
//       .eq("id", id)
//       .select()
//       .single();

//     if (error) throw error;
//     res.json({ data });
//   } catch (err) {
//     next(err);
//   }
// };
