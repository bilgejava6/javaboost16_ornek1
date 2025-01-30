/**
 * Java da bir sınıf ile olşuturulan nesne yapısı TS de interface ile yapılır.
 */
export interface IUrun{
    id: number,
    ad: string,
    aciklama: string,
    fiyat: number,
    stok: boolean,
    promosyon: string,
    teslimat: string,
    resim: string
}