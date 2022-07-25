import { H1, Section,SectionCards } from "./styled"
export default function WhyPremium() {
    return(
        <Section>
            <H1>Por que ser Premium?</H1>
            <SectionCards>
                <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f"/>
                    <h3>Modo Offline.</h3>
                    <p>Ouça músicas onde estiver</p>
                </div>
                <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137"/>
                    <h3>Sem anúncios.</h3>
                    <p>Curta música sem parar</p>
                </div>
                <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f4306998d3ffd58aad6da6afdf67"/>
                    <h3>Ouça o que quiser.</h3>
                    <p>Mesmo celular ou tablet</p>
                </div>
                <div>
                    <img src="https://i.scdn.co/image/ab671c3d0000f430cd6c528745e510c5be63a012"/>
                    <h3>Troque de música o quanto quiser.</h3>
                    <p>Pule quando quiser</p>
                </div>
            </SectionCards>
        </Section>
    )
}