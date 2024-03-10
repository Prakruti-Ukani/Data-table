import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const data = [
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "43f5940bfd6881b2f8e0c434a3a96f229a8a1054",
        "fields": {
            "date": "2022-03-06",
            "currency": "USD",
            "rate": 1.0929
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "1787f87bcf029a223e001d6f88750fe0ca6772d1",
        "fields": {
            "date": "2022-03-06",
            "currency": "AUD",
            "rate": 1.4872
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "756f0f685431156ad1d3bc24b91d574c5a6f00fa",
        "fields": {
            "date": "2022-03-06",
            "currency": "CAD",
            "rate": 1.3937
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "58e15a0abb6fc40d08a10ae0f58fc2c9525b267a",
        "fields": {
            "date": "2022-03-06",
            "currency": "GBP",
            "rate": 0.8238800000000001
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "4f7879e2c8e97bc11ae065f748a2e13f2cd73c71",
        "fields": {
            "date": "2022-03-06",
            "currency": "SEK",
            "rate": 10.7935
        }
    },
    {
        "datasetid": "euro-exchange-rates",
        "recordid": "e3f948548d1479dff8b10aeaaf0c247e17b70897",
        "fields": {
            "date": "2022-03-06",
            "currency": "MXN",
            "rate": 22.7543
        }
    }
]

export const ExchangeRateTable = () => {
    return (
        <>
            <h2>Exchange Rate Table</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Exchange Rate Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Currency</TableCell>
                            <TableCell>Rate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => {
                            const { fields: { date, currency, rate } } = item
                            return (
                                <TableRow key={index}>
                                    <TableCell>{date}</TableCell>
                                    <TableCell>{currency}</TableCell>
                                    <TableCell>{rate}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};


