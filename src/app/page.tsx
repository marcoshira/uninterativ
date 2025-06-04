"use client";

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  useTheme,
} from "@mui/material";
import { InputCard } from "@/components/InputCard";
import { useEffect, useState } from "react";
import CustomTextField from "@/components/CustomTextField";
import calc from "@/utils/calc";

export default function Home() {
  const [pessoas, setPessoas] = useState<number>(1);
  const [chuveiro, setChuveiro] = useState<boolean>(false);
  const [arCondicionado, setArCondicionado] = useState<number>(0);
  const [tvs, setTvs] = useState<number>(0);
  const [area, setArea] = useState<number>(0);

  const [consumoTotal, setConsumoTotal] = useState<number>(0);
  const [custoInstalacao, setCustoInstalacao] = useState<number>(0);
  const [economiaTotal, setEconomiaTotal] = useState<number>(0);
  const [tempoRetorno, setTempoRetorno] = useState<number>(0);

  const theme = useTheme();

  useEffect(() => {
    if (pessoas < 1 || Number.isInteger(pessoas) == false) {
      setPessoas(1);
    }
    if (arCondicionado < 0 || Number.isInteger(arCondicionado) === false) {
      setArCondicionado(0);
    }
    if (tvs < 0 || Number.isInteger(tvs) === false) {
      setTvs(0);
    }
    if (area < 0 || Number.isInteger(area) === false) {
      setArea(0);
    }
    const result = calc(pessoas, chuveiro, arCondicionado, tvs, area);
    setConsumoTotal(result.consumoTotal);
    setCustoInstalacao(result.custoInstalacao);
    setEconomiaTotal(result.economiaTotal);
    setTempoRetorno(result.tempoRetorno);
  }, [pessoas, arCondicionado, tvs, area, chuveiro]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        flexDirection: {
          xs: "column", // phones
          sm: "column", // tablets
          md: "row", // desktops and up
        },
        backgroundColor: theme.palette.primary.contrastText,
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%", // phones
            sm: "100%", // tablets
            md: "50%", // desktops and up
          },
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: {
            xs: "auto", // phones
            sm: "auto", // tablets
            md: "100vh", // desktops and up
          },
          flexDirection: "row",
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <InputCard title="Dados da sua residência" white={false}>
          <CustomTextField
            id="pessoas"
            label="Número de pessoas"
            variant="outlined"
            value={pessoas.toString()}
            onChange={(text: string | number) =>
              setPessoas(parseInt(text as string))
            }
            type="number"
            placeholder="Ex: 4 pessoas"
            white={false}
          />
          <CustomTextField
            id="arCondicionado"
            label="Número de ar-condicionados"
            variant="outlined"
            value={arCondicionado.toString()}
            onChange={(text: string | number) =>
              setArCondicionado(parseInt(text as string))
            }
            type="number"
            placeholder="Ex: 2 aparelhos"
            white={false}
          />
          <CustomTextField
            id="tvs"
            label="Número de televisões"
            variant="outlined"
            value={tvs.toString()}
            onChange={(text: string | number) =>
              setTvs(parseInt(text as string))
            }
            type="number"
            placeholder="Ex: 2 televisões"
            white={false}
          />
          <CustomTextField
            id="area"
            label="Quantos m² de área disponível"
            variant="outlined"
            value={area.toString()}
            onChange={(text: string | number) =>
              setArea(parseInt(text as string))
            }
            type="number"
            placeholder="Ex: 25 m²"
            white={false}
          />
          <FormGroup sx={{ width: "100%" }}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: theme.palette.primary.contrastText,
                    "&.Mui-checked": {
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                />
              }
              label="Sua casa possui chuveiro elétrico?"
              onChange={() => setChuveiro}
              sx={{
                color: theme.palette.primary.contrastText,
              }}
            />
          </FormGroup>
        </InputCard>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: {
            xs: "auto", // phones
            sm: "auto", // tablets
            md: "100vh", // desktops and up
          },
          width: {
            xs: "100%", // phones
            sm: "100%", // tablets
            md: "50%", // desktops and up
          },
          flexDirection: "row",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <InputCard title="Resultados" white>
          <CustomTextField
            id="consumoTotal"
            label="Consumo total de energia (kWh/mês)"
            variant="outlined"
            value={consumoTotal.toString()}
            onChange={(text: string | number) =>
              setConsumoTotal(parseInt(text as string))
            }
            type="number"
            placeholder="0"
            disabled
          />
          <CustomTextField
            id="custoInstalacao"
            label="Custo da instalação (R$)"
            variant="outlined"
            value={new Intl.NumberFormat("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
              .format(custoInstalacao)
              .toString()}
            onChange={(text: string) =>
              setCustoInstalacao(parseInt(text as string))
            }
            type="text"
            placeholder="0,00"
            disabled
          />
          <CustomTextField
            id="economiaTotal"
            label="Economia total (R$/mês)"
            variant="outlined"
            value={new Intl.NumberFormat("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
              .format(economiaTotal)
              .toString()}
            onChange={(text: string | number) =>
              setEconomiaTotal(parseInt(text as string))
            }
            type="text"
            placeholder="0,00"
            disabled
          />
          <CustomTextField
            id="tempoRetorno"
            label="Tempo de retorno do investimento (meses)"
            variant="outlined"
            value={tempoRetorno.toFixed().toString()}
            onChange={(text: string | number) =>
              setTempoRetorno(parseInt(text as string))
            }
            type="number"
            placeholder="0"
            disabled
          />
        </InputCard>
      </Box>
    </Box>
  );
}
