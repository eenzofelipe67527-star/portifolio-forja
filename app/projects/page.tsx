import Card from "@/components/Card";

export default function Projects()
{
    return(
<main className="h-screen w-screen bg-gray-500 flex items-center flex-col gap-4">
    <h1 className="text-6x1 mt-4">Meus projetos</h1>

<Card src="/picture.png"
title="Loja"
description="...."
url="https://github.com/eenzofelipe67527-star/styleSoundCar-forja-tarde.git"/>

<Card src="/p2.png"
title=".Calculadora com UseEffect."
description="...."
url="https://github.com/eenzofelipe67527-star/calculadora-forja-useEffect.git"/>

<Card src="/p3.png"
title=".Exercícios em JS."
description="...."
url="https://github.com/eenzofelipe67527-star/lista-js_Enzo_Antony.git"/>

</main>
    );
}