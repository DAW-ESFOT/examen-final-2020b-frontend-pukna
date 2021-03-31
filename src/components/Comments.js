
import React from "react";
import useSWR from "swr";
import { fetcher } from "@/lib/utils";

const Comments = ({ articleId }) => {
  const { data, error } = useSWR(`/myproducts/${articleId}`, fetcher);

  if (error) return <div>No se pudo cargar los comentarios</div>;
  if (!data) return <div>Cargando comentarios...</div>;
  // render data
  return (
      <div key={data.id}>

            {data.code}

      </div>
  );
};

export default Comments;
