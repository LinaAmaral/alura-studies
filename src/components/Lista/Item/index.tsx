import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
  selecionaTarefa: (tarefa: ITarefa) => void;
}
export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: Props) {
  return (
    <li
      className={`${style.item}
       ${selecionado ? style.itemSelecionado : ""}
       ${completado ? style.itemCompletado : ""}
       `}
      onClick={() =>
        !completado &&
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <p>{tarefa}</p>
      <p>{tempo}</p>
      {completado && (
        <span className={style.concluido} aria-label="tarefa completada" />
      )}
    </li>
  );
}
