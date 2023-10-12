export async function getData() {
    const url = "https://virtualtourdosman.online/api/penduduk/get";
    const res = await fetch(url, {
        cache: 'no-store',
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();
    console.log(data)
    return data;
}


