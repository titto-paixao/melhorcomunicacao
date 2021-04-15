import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router'
import { useToasts } from 'react-toast-notifications'
import {MdEdit, MdDelete, MdStayCurrentPortrait, MdAdd} from 'react-icons/md'
import {format} from 'date-fns'
import SyncLoader from "react-spinners/SyncLoader";

import api from 'services/api'

import {Container, Header, Table} from './styles'

interface IProduct{
  id:string;
  model:string;
  brand:string;
  color:string;
  price: number;
  date:string;
  endDate:string;
  code:string;
}

const HomePage: React.FC = () => {
  const history = useHistory()
  const { addToast } = useToasts()
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[] | []>([])
  const [extra, setExtra] = useState<number>(Math.random())

  useEffect(() => {
    setLoading(true)
    api.get("/phone")
      .then(response => {
        let data = response.data.map(element => {
          return {
            id:element._id,
            model:element.model,
            color:element.color,
            brand:element.brand,
            price:element.price,
            date:format(new Date(element.date), "dd/MM/YYY"),
            endDate:format(new Date(element.endDate), "dd/MM/YYY"),
            code:element.code[0]
          }
        })

        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
      })
  }, [extra])

  const deleteProduct = async (id) => {
    setLoading(true)
    await api.delete(`/phone/${id}`)
    .then(response => {
      addToast('Produto deletado', {
        appearance: 'info',
        autoDismiss: true,
      })
      setExtra(Math.random())
      setLoading(false)
    })
    .catch(error => {
      setLoading(false)
    })
  }

  const money = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  return(
    <Container>
      <SyncLoader
        color="#FFF"
        loading={loading}
        css={`
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%, -50%);
          background:#000A;
          height:100vh;
          width:100vw;
          display:flex;
          flex:1;
          align-items:center;
          justify-content:center;
        `}
        size={24}
      />

      <Header>
        <h1>Produtos</h1>
        <button onClick={() => history.push("create")} >
          <MdAdd size={14} />
          <MdStayCurrentPortrait size={24} style={{marginRight:8}} />
          Adicionar
        </button>
      </Header>

      <Table>
        <thead>
          <tr>
            <th style={{paddingLeft:32}} >Código</th>
            <th>Modelo</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Cor</th>
            <th></th>
          </tr>
        </thead>
        {products.length > 0 &&
          <tbody>
            {products.map(element => (
              <tr key={element.id} >
                <td style={{paddingLeft:32}} >{element.code}</td>
                <td>{element.model}</td>
                <td>{money.format(element.price)}</td>
                <td>{element.brand}</td>
                <td>{element.color}</td>
                <td className="icons" >
                  <MdEdit size={24} className="icon" onClick={() => history.push("/create", {product:element})} />
                  <MdDelete size={24} className="icon" onClick={() => deleteProduct(element.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        }
        </Table>
        {products.length === 0 && <div className="length">Nenhum produto a ser exibido</div>}
    </Container>
  );
}

export default HomePage;