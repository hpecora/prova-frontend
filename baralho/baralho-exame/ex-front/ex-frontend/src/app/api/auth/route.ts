import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    console.log("Dados recebidos no backend:", body);

    const { password } = body;

    // Validação da senha usando variável de ambiente
    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
        console.log("Usuário autenticado com sucesso!");
        return NextResponse.json({ message: "Autenticado com sucesso!" });
    }

    console.log("Autenticação falhou.");
    return NextResponse.json(
        { error: "Usuário ou senha inválidos." },
        { status: 401 }
    );
}
