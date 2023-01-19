import { useForm } from "react-hook-form";
import { BackGroundContainer } from "../../components/Calc/BackGround.style";
import { CalcForm } from "../../components/Calc/CalcForm.style";
import { DivContainer } from "../../components/Calc/DivContainer.style";
import { PreviewContainer } from "../../components/Calc/Preview.style";
import api from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validators/calc.validator";
import { useState } from "react";

function Calc() {
  const [result, setResult] = useState([]);

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleResult(data) {
    await api
      .post("/", data)
      .then((response) => {
        setResult(response.data);
      })
      .catch((err) => console.log(err));
  }

  console.log(result);

  return (
    <BackGroundContainer>
      <DivContainer>
        <CalcForm onSubmit={handleSubmit(handleResult)}>
          <h1>Simule sua Antecipação</h1>
          <h3>Informe o valor da venda *</h3>
          <input
            required
            type="number"
            id="amount"
            placeholder="R$00,00"
            {...register("amount")}
          />

          <h3>Em quantas parcelas *</h3>
          <input
            required
            type="number"
            id="installments"
            {...register("installments")}
          />
          <p> Máximo de 12 parcelas.</p>

          <h3>Informe o percentual de MDR*</h3>
          <input required type="number" id="mdr" {...register("mdr")} />

          <button type="submit">Calcular</button>
        </CalcForm>
        <PreviewContainer>
          <h1>Você receberá:</h1>
          <p>
            Amanhã:
            <span>
              <strong> R${result[1]} </strong>
            </span>
          </p>
          <p>
            Em 15 dias:
            <span>
              <strong> R${result[15]} </strong>
            </span>
          </p>
          <p>
            Em 30 dias:
            <span>
              <strong> R${result[30]} </strong>
            </span>
          </p>
          <p>
            Em 90 dias:
            <span>
              <strong> R${result[90]} </strong>
            </span>
          </p>
        </PreviewContainer>
      </DivContainer>
    </BackGroundContainer>
  );
}

export default Calc;
