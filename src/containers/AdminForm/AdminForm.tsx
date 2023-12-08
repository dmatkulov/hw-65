import React, {useCallback, useState} from 'react';
import {ApiPage} from "../../types";
import axiosApi from "../../axiosApi";
import {useNavigate} from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
let selected = '';
const AdminForm: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<ApiPage | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchExistingContent = useCallback(async (event: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      selected = event.target.value;
      setIsLoading(true);
      const url = '/pages/' + selected + '.json';

      const pageResponse = await axiosApi.get<ApiPage | null>(url);
      const pages = pageResponse.data;
      
      if (!pages) {
        return;
      } else {
        const newPage = {
          ...pages,
          id: selected,
        };
        setPage(newPage);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);
  
  const pageChanged = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    const editePage = {
      [name]: value,
    } as ApiPage;
    
    setPage(editePage);
  }, []);
  
  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      await axiosApi.put<ApiPage>('/pages/' + selected + '.json', page );
      navigate('/pages/home');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      Admin panel
      {isLoading && <Spinner/>}
      <form onSubmit={onFormSubmit}>
        <div className="form-group mb-3">
          <select
            className="form-select"
            name="page" id="page" required
            onChange={fetchExistingContent}
          >
            <option>Select page</option>
            <option value="home">Home</option>
            <option value="about">About</option>
            <option value="divisions">Divisions</option>
            <option value="contacts">Contacts</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="title">Title</label>
          <input
            id="title" type="text" name="title" required
            className="form-control"
            onChange={pageChanged}
            value={page ? page.title : ''}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="content">Content</label>
          <textarea
            required
            id="content"
            name="content"
            className="form-control"
            onChange={pageChanged}
            value={page ? page.content : ''}
          />
        </div>
        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminForm;