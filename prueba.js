const ingresoPerCapita = [
{decil: 1, iMinimo: 0, iMaximo: 6667, iPromedio: 4167},
{decil: 2, iMinimo: 6667, iMaximo: 9867, iPromedio: 8266},
{decil: 3, iMinimo: 9867, iMaximo: 12580, iPromedio: 11252},
{decil: 4, iMinimo: 12580, iMaximo: 15711, iPromedio: 14080},
{decil: 5, iMinimo: 15711, iMaximo: 19200, iPromedio: 17339},
{decil: 6, iMinimo: 19200, iMaximo: 22500, iPromedio: 20838},
{decil: 7, iMinimo: 22500, iMaximo: 28000, iPromedio: 25092},
{decil: 8, iMinimo: 28000, iMaximo: 37500, iPromedio: 32007},
{decil: 9, iMinimo: 37500, iMaximo: 52500, iPromedio: 43955},
{decil: 10, iMinimo: 52500, iMaximo: 1004999, iPromedio: 83246}
]

ipcJson = JSON.stringify(ingresoPerCapita)

console.log(ipcJson)