import {useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {ApiPage, Page} from "../../types";
import axiosApi from "../../axiosApi";
import Spinner from "../../components/Spinner/Spinner";
import PageLayout from "../../components/PageLayout/PageLayout";

const Pages = () => {
  const params = useParams() as { pageId: string };
  const [page, setPage] = useState<Page>();
  const [loading, setLoading] = useState(false);
  
  const fetchPages = useCallback(async () => {
    try {
      setLoading(true);
      const url = '/pages/' + params.pageId + '.json';
      
      const pageResponse = await axiosApi.get<ApiPage | null>(url);
      const pages = pageResponse.data;
      
      if (!pages) {
        return;
      } else {
        const newPage = {
          ...pages,
          id: params.pageId,
        };
        setPage(newPage);
      }
    } finally {
      setLoading(false);
    }
  }, [params.pageId]);
  
  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);
  
  return page && (
    <div className="text-center">
      <div className="mt-5">
        {loading ? <Spinner/> : <PageLayout page={page}/>}
      </div>
    </div>
  );
};

export default Pages;