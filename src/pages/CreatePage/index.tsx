import React, {useState, useEffect} from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup'
import CurrencyInput from 'react-currency-input';
import uuid from 'react-uuid'
import {format} from 'date-fns'
import {useHistory, useLocation} from 'react-router'
import { useToasts } from 'react-toast-notifications'
import SyncLoader from "react-spinners/SyncLoader";

import api from 'services/api'

import {Container, Header} from './styles'

interface IProduct{
  model:string;
  brand:string;
  color:string;
  price: number;
  date:string;
  endDate:string;
}

const CreatePage: React.FC = () => {
  const history = useHistory()
  const location = useLocation<any>()

  const { addToast } = useToasts()

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  const [productId, setProductId] = useState<number | undefined>(undefined);

  const [values, setValues] = useState<IProduct>({
    model:"",
    brand:"",
    color:"BLACK",
    price:0,
    date:"",
    endDate:""
  })

  useEffect(() => {
    setLoadingInitial(true)
    if(location.state !== undefined){
      setValues((prevState) => ({
        ...prevState,
        model:location.state.product.model,
        brand:location.state.product.brand,
        color:location.state.product.color,
        price:location.state.product.price,
        date:format(new Date(location.state.product.date), "YYY-MM-dd"),
        endDate:format(new Date(location.state.product.endDate), "YYY-MM-dd")
      }))

      setProductId(location.state.product.id)
    }
    setLoadingInitial(false)
  }, [location, productId])

  const handleSubmit = async (values:IProduct) => {
    setLoading(true)
    let data:any = values
    data.code = uuid().substring(0, 8)
    data.date = format(new Date(data.date), "dd/MM/YYY")
    data.endDate = format(new Date(data.endDate), "dd/MM/YYY")
    if(location.state === undefined){
      await api.post("/phone", data)
        .then(response => {
          if(response.data.business){
            addToast('Produto adicionado com sucesso', {
              appearance: 'success',
              autoDismiss: true,
            })
            setLoading(false)
            history.push("/")
          }else{
            addToast('Ocorreu um erro interno', {
              appearance: 'error',
              autoDismiss: true,
            })
            setLoading(false)
          }
        }).catch(error => {
          addToast('Ocorreu um erro interno', {
            appearance: 'error',
            autoDismiss: true,
          })
          setLoading(false)
        })
    }else{
      await api.patch(`/phone/${productId}`, data)
        .then(response => {
          addToast('Dados atualizados com sucesso', {
            appearance: 'success',
            autoDismiss: true,
          })
          setLoading(false)
          history.push("/")
        }).catch(error => {
          addToast('Ocorreu um erro interno', {
            appearance: 'error',
            autoDismiss: true,
          })
          setLoading(false)
        })
    }
    
  }

  const validation = yup.object().shape({
    model: yup.string().required("Campo obrigatório"),
    brand: yup.string().required("Campo obrigatório"),
    color: yup.string().required("Campo obrigatório"),
    price: yup.number().min(1, "Preço deve ser maior que 0").required("Campo obrigatório"),
    date: yup.date().required("Campo obrigatório"),
    endDate: yup.date()
      .min(
        yup.ref('date'),
        ({ min }) => `Deve ser superior a ${format(new Date(min), "dd/MM/YYY")}`,
      )
      .required("Campo obrigatório")
  })

  if(loadingInitial){
    return(
      <SyncLoader
        color="#FFF"
        loading={loadingInitial}
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
    )
  }

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
        <h1>
          Detalhes do produto
        </h1>
      </Header>

      <Formik
        initialValues={values}
        validationSchema={validation}
        onSubmit={values => handleSubmit(values)}
      >
        {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <div className="form_row">
            <div className="form_input">
              <label htmlFor="Modelo">Modelo</label>
              <Field
                name="model"
                style={{borderColor:errors.model && touched.model ? "red" : "#707070"}}
              />
              {errors.model && touched.model ? <span>{errors.model}</span> : null}
            </div>

            <div className="form_input">
              <label htmlFor="Marca">Marca</label>
              <Field
                name="brand"
                style={{borderColor:errors.brand && touched.brand ? "red" : "#707070"}}
              />
              {errors.brand && touched.brand ? <span>{errors.brand}</span> : null}
            </div>
          </div>

          <div className="form_row">
            <div className="form_input">
              <label htmlFor="Cor">Cor</label>
              <Field
                as="select"
                name="color"
                style={{borderColor:errors.color && touched.color ? "red" : "#707070"}}
              >
                <option value="BLACK">Black</option>
                <option value="WHITE">White</option>
                <option value="GOLD">Gold</option>
                <option value="PINK">Pink</option>
              </Field>
              {errors.color && touched.color ? <span>{errors.color}</span> : null}
            </div>
            <div className="form_input">
              <label htmlFor="Preço">Preço</label>
              <CurrencyInput
                prefix="R$"
                precision="2"
                decimalSeparator=","
                thousandSeparator="."
                style={{borderColor:errors.price && touched.price ? "red" : "#707070"}}
                onChange={(event) => setFieldValue('price',
                  parseFloat(event.toString()
                  .replace("R$","")
                  .replace(".", "")
                  .replace(",", '.'))
                )}
                value={values.price}
              />
              {errors.price && touched.price ? <span>{errors.price}</span> : null}
            </div>
          </div>
          
          <div className="form_row">
            <div className="form_input">
              <label htmlFor="Início das vendas">Início das vendas</label>
              <Field
                name="date"
                type="date"
                min="1960-01-01"
                max='2050-01-01'
                style={{borderColor:errors.date && touched.date ? "red" : "#707070"}}
              />
              {errors.date && touched.date ? <span>{errors.date}</span> : null}
            </div>
            
            <div className="form_input">
              <label htmlFor="Fim das vendas">Fim das vendas</label>
              <Field
                name="endDate"
                type="date"
                min="1960-01-01"
                max='2050-01-01'
                style={{borderColor:errors.endDate && touched.endDate ? "red" : "#707070"}}
              />
              {errors.endDate && touched.endDate ? <span>{errors.endDate}</span> : null}
            </div>
          </div>

          <div className="container_buttons">
            <div className="buttons">
              <button onClick={() => history.push("/")} >Voltar</button>
              <button type="submit">{location.state === undefined ? "Salvar" : "Atualizar"}</button>
            </div>
          </div>

        </Form>
        )}
      </Formik>
      
    </Container>
  );
}

export default CreatePage;