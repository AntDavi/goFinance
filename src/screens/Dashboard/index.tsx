import React from 'react';
import {Container, 
        Header,
        UserWrapper,
        UserInfo, 
        Photo, 
        User, 
        UserGreeting, 
        UserName,
        Icon,
        HighlightCards,
        Transactions,
        Title} 
from './styles';

import { HighlightCard } from '../../components/HighlightCard';

export default function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/69051403?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>

                            <UserName>Anthony</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>

            </Header>

            <HighlightCards>
                <HighlightCard
                    title="Entradas"
                    amount="R$ 12.000,00"
                    lastTransaction="Última entradas dias 13 de Outubro"
                    type="up"
                />
                <HighlightCard
                    title="Saídas"
                    amount="R$ 5.000,00"
                    lastTransaction="Última saída dias 20 de Outubro"
                    type="down"
                />
                <HighlightCard
                    title="Total"
                    amount="R$ 7.000,00"
                    lastTransaction="01 a 22 de Outubro"
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
            </Transactions>
        </Container>
    )
}