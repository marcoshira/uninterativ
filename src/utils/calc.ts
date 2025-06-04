export default function calc(
  pessoas: number,
  chuveiroEletrico: boolean,
  arCondicionado: number,
  tvs: number,
  area: number
) {
  const tarifa = 0.63; // R$/kWh
  const eficiencia = 0.8;
  const descontoExcedente = 0.4; // porcentagem de valor do excedente compensado (40%)

  // Consumo total (kWh/mês)
  const consumoChuveiro = chuveiroEletrico ? pessoas * 5.5 * 30 : 0;
  const consumoArCondicionado = arCondicionado * 1.0 * 6 * 30;
  const consumoTVs = tvs * 0.12 * 5 * 30;
  const consumoFixo = 108 + 4 + 15 + 15;

  const consumoTotal =
    consumoChuveiro + consumoArCondicionado + consumoTVs + consumoFixo;

  // Sistema solar
  const potenciaInstalada = area / 7;
  const custoInstalacao = 5000 + potenciaInstalada * 3500; // Custo base + custo por kW instalado

  const potenciaGerada = potenciaInstalada * 150;
  const energiaGerada = potenciaGerada * eficiencia;

  // Economia com compensação
  let economiaTotal: number;

  if (energiaGerada <= consumoTotal) {
    economiaTotal = energiaGerada * tarifa;
  } else {
    const excedente = energiaGerada - consumoTotal;
    const valorBase = consumoTotal * tarifa;
    const valorExcedente = excedente * tarifa * descontoExcedente;
    economiaTotal = valorBase + valorExcedente;
  }

  const tempoRetorno =
    economiaTotal > 0 ? custoInstalacao / economiaTotal : Infinity;

  return {
    consumoTotal: Number(consumoTotal.toFixed(2)),
    custoInstalacao: Number(custoInstalacao.toFixed(2)),
    energiaGerada: Number(energiaGerada.toFixed(2)),
    economiaTotal: Number(economiaTotal.toFixed(2)),
    tempoRetorno: Number(tempoRetorno.toFixed(1)),
  };
}
