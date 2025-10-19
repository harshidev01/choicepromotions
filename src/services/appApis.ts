export async function conatctAPI(data:any){
    const url = "https://freeemailapi.vercel.app/sendEmail/";

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    return await response.json();
}