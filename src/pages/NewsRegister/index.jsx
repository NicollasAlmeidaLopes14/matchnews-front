import styles from './styles.module.css'

import NewRegisterForm from '../../components/NewsRegisterForm';

import { MdCloudUpload, MdPublish } from "react-icons/md";

function NewsRegister() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Cadastrar Nova Notícia</h1>

            <form>
                <div className={styles.leftContent}>
                    <NewRegisterForm titulo={'Informações Básicas'} height={'387px'}>
                        <div className={styles.basicInformationsContent}>
                            <div className={styles.fieldWrapper}>
                                <label htmlFor="news-title">
                                    Título da Notícia
                                    <span className={styles.asterisk}>*</span>
                                </label>
                                <input id="news-title" placeholder='Ex: Corinthians anuncia contratação de peso' />
                            </div>

                            <div className={styles.fieldWrapper}>
                                <label htmlFor="">
                                    Resumo
                                    <span className={styles.asterisk}>*</span>
                                </label>
                                <textarea name="" id="" placeholder='Breve introdução que aparecerá nos cards da notícia' rows={4}></textarea>
                            </div>
                        </div>
                    </NewRegisterForm>

                    <NewRegisterForm
                        titulo={'Conteúdo da Matéria'}
                        height={'510px'}
                        marginBottom={'124px'}>
                        <div className={styles.basicInformationsContent}>
                            <textarea name="" id="" placeholder='Escreva o corpo da notícia aqui...' rows={20}></textarea>
                        </div>
                    </NewRegisterForm>
                </div>

                <aside className={styles.aside}>
                    <NewRegisterForm titulo={'Mídia Destaque'} width={'280px'}>
                        <label htmlFor="file-input" className={styles.uploadLabel}>
                            <MdCloudUpload className={styles.uploadIcon} />

                            <p className={styles.fileInputDescription}>Arraste uma imagem ou
                                clique para fazer upload</p>
                            <span className={styles.recomendationSpan}>Recomendado: 1200x670px {'(16:9)'}</span>

                            <input type="file" id='file-input' className={styles.fileInput} />
                        </label>
                    </NewRegisterForm>

                    <NewRegisterForm titulo={'Classificação'} width={'280px'}>
                        <div className={styles.classificationContainer}>
                            <div className={styles.selectWrapper}>
                                <span className={styles.selectSpan}>Categoria</span>
                                <select name="" id="" className={styles.select}>
                                    <option value="">Últimas Notícias</option>
                                    <option value="">Mercado da bola</option>
                                    <option value="">Entrevista</option>
                                    <option value="">Analise Tática</option>
                                </select>
                            </div>

                            <div className={styles.fieldWrapper}>
                                <label htmlFor="news-title">
                                    Tags
                                    <span className={styles.asterisk}>*</span>
                                </label>
                                <input id="news-title" placeholder='Ex: Futebol Brasileiro' />
                            </div>
                        </div>
                    </NewRegisterForm>
                </aside>
            </form>

            <footer className={styles.footer}>
                <div className={styles.btnsContainer}>
                    <button className={styles.cancelBtn}>Cancelar</button>

                    <button className={styles.publishBtn}>
                        <MdPublish />
                        Publicar Notícia
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default NewsRegister;