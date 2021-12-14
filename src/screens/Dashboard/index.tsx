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
        Title,
        TransactionList} 
from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
    id: string
}

export default function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title:"Desenvolvimendo de site",
            amount: "R$ 5.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/09/2021",
        },
        {
            id: '2',
            type: 'negative',
            title:'Pizza e hamburguer',
            amount: "R$ 130,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "13/09/2021",
        },
        {
            id: '3',
            type: 'negative',
            title:'Conta internet',
            amount: "R$ 200,00",
            category: {
                name: 'Internet',
                icon: 'wifi'
            },
            date: "13/09/2021",
        },
        {
            id: '4',
            type: 'positive',
            title:"Desenvolvimendo de interface",
            amount: "R$ 2.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/09/2021",
        },
        
    ];

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
                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
    )
}