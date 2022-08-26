import { Container, Form } from './style';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';
import { ButtonText } from '../../components/ButtonText';

export function New() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState('');

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink('');
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTags]);
    setNewTags('');
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título da nota');
    }
    if (newTags) {
      return alert('Você deixou uma tag no campo para adicionar, mas não adicionou');
    }
    if (newLink) {
      return alert('Você deixou uma link no campo para adicionar, mas não adicionou');
    }
    await api.post('/notes', {
      title,
      description,
      tags,
      links,
    });

    alert('Nota criada com sucesso');
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <ButtonText title="back" onClick={handleBack} />
          </header>

          <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <TextArea placeholder="Content" onChange={(e) => setDescription(e.target.value)} />

          <Section title="Links">
            {links.map((link, index) => (
              <NoteItem key={String(index)} value={link} onClick={() => handleRemoveLink(link)} />
            ))}
            <NoteItem
              isNew
              placeholder="New link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Tags">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="New tags"
                value={newTags}
                onChange={(e) => setNewTags(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button title="Save" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
