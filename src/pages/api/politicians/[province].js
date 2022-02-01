import { politicians } from '../../../data/politicians';

const provincesByName = {
  Alberta: 'AB',
  'British Columbia': 'BC',
  Manitoba: 'MB',
  'New Brunswick': 'NB',
  'Newfoundland and Labrador': 'NL',
  'Nova Scotia': 'NS',
  Nunavut: 'NU',
  'Northwest Territories': 'NT',
  Ontario: 'ON',
  'Prince Edward Island': 'PE',
  Quebec: 'QC',
  Saskatchewan: 'SK',
  Yukon: 'YT',
};

const provincesByCode = {
  AB: 'Alberta',
  BC: 'British Columbia',
  MB: 'Manitoba',
  NB: 'New Brunswick',
  NL: 'Newfoundland and Labrador',
  NS: 'Nova Scotia',
  NU: 'Nunavut',
  NT: 'Northwest Territories',
  ON: 'Ontario',
  PE: 'Prince Edward Island',
  QC: 'Quebec',
  SK: 'Saskatchewan',
  YT: 'Yukon',
};

export default function constituenciesHandler({ query: { province } }, res) {
  if (!provincesByCode[province]) {
    res.status(404).json({ message: `Invalid province code: ${province}` });
  }

  const p = provincesByCode[province];

  const data = politicians.filter(({ province }) => province === p);
  const sortedData = data.sort((a, b) => {
    const textA = a.firstName.toUpperCase();
    const textB = b.firstName.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  return res.status(200).json({ data: sortedData });
}
