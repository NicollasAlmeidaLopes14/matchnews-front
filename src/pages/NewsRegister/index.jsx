import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import {
    MdArrowBack,
    MdArticle,
    MdCheckCircle,
    MdLink,
    MdOutlineTipsAndUpdates,
    MdPersonOutline,
    MdPublish,
    MdTune,
} from 'react-icons/md'

import NewsRegisterForm from '../../components/NewsRegisterForm'
import FormField from '../../components/FormField'
import styles from './styles.module.css'

const categoryOptions = [
    { value: 'ultimas-noticias', label: 'Últimas notícias' },
    { value: 'mercado-da-bola', label: 'Mercado da bola' },
    { value: 'entrevista', label: 'Entrevista' },
    { value: 'analise-tatica', label: 'Análise tática' },
]

function NewsRegister() {
    function handleSubmit(event) {
        event.preventDefault()

        toast.success('Notícia pronta para publicação!', {
            position: 'bottom-right',
        })
    }

    return (
        <div className={styles.page}>
            <ToastContainer autoClose={3500} hideProgressBar />

            <header className={styles.header}>
                <Link className={styles.backLink} to="/">
                    <MdArrowBack aria-hidden="true" />
                    Voltar ao início
                </Link>

                <div className={styles.headingRow}>
                    <div>
                        <span className={styles.eyebrow}>MatchNews · Painel editorial</span>
                        <h1 className={styles.title}>Cadastrar nova notícia</h1>
                        <p className={styles.subtitle}>
                            Organize as informações da matéria antes de publicar para os leitores.
                        </p>
                    </div>

                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot} />
                        Novo conteúdo
                    </div>
                </div>
            </header>

            <form className={styles.form} onSubmit={handleSubmit}>
                <main className={styles.mainColumn}>
                    <NewsRegisterForm
                        icon={<MdArticle aria-hidden="true" />}
                        title="Informações principais"
                        description="O título e o resumo são a primeira impressão da sua notícia."
                    >
                        <div className={styles.fieldsGroup}>
                            <FormField
                                id="news-title"
                                label="Título da notícia"
                                placeholder="Ex.: Clube anuncia novo reforço para a temporada"
                                maxLength={120}
                                required
                            />

                            <FormField
                                id="news-summary"
                                label="Resumo"
                                placeholder="Apresente o ponto principal da notícia em poucas linhas."
                                hint="Este texto poderá aparecer nos cards da notícia."
                                maxLength={240}
                                rows={4}
                                as="textarea"
                                required
                            />
                        </div>
                    </NewsRegisterForm>

                    <NewsRegisterForm
                        icon={<MdArticle aria-hidden="true" />}
                        title="Conteúdo da matéria"
                        description="Desenvolva os fatos com clareza e destaque as informações mais relevantes."
                    >
                        <FormField
                            id="news-content"
                            label="Texto da notícia"
                            placeholder="Escreva o corpo completo da notícia aqui..."
                            rows={13}
                            as="textarea"
                            required
                        />
                    </NewsRegisterForm>
                </main>

                <aside className={styles.sidebar}>
                    <NewsRegisterForm
                        icon={<MdTune aria-hidden="true" />}
                        title="Dados editoriais"
                        description="Defina como a matéria será identificada."
                        compact
                    >
                        <div className={styles.fieldsGroup}>
                            <FormField
                                id="news-category"
                                label="Categoria"
                                as="select"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Selecione uma categoria</option>
                                {categoryOptions.map((category) => (
                                    <option key={category.value} value={category.value}>
                                        {category.label}
                                    </option>
                                ))}
                            </FormField>

                            <FormField
                                id="news-author"
                                label="Autor responsável"
                                placeholder="Ex.: Redação MatchNews"
                                icon={<MdPersonOutline aria-hidden="true" />}
                                required
                            />
                        </div>
                    </NewsRegisterForm>

                    <NewsRegisterForm
                        icon={<MdLink aria-hidden="true" />}
                        title="Fonte da informação"
                        description="Registre a origem usada na apuração."
                        compact
                    >
                        <FormField
                            id="news-source"
                            label="Fonte ou referência"
                            placeholder="Ex.: Site oficial do clube"
                            hint="Pode ser o nome de um veículo, clube ou entrevistado."
                        />
                    </NewsRegisterForm>

                    <div className={styles.tipCard}>
                        <MdOutlineTipsAndUpdates className={styles.tipIcon} aria-hidden="true" />
                        <div>
                            <strong>Antes de publicar</strong>
                            <p>Revise nomes, datas e números. Uma fonte clara aumenta a confiança do leitor.</p>
                        </div>
                    </div>
                </aside>

                <footer className={styles.actionBar}>
                    <div className={styles.actionHint}>
                        <MdCheckCircle aria-hidden="true" />
                        Os campos com * são obrigatórios
                    </div>

                    <div className={styles.actions}>
                        <Link className={styles.cancelButton} to="/">
                            Cancelar
                        </Link>

                        <button className={styles.publishButton} type="submit">
                            <MdPublish aria-hidden="true" />
                            Publicar notícia
                        </button>
                    </div>
                </footer>
            </form>
        </div>
    )
}

export default NewsRegister
