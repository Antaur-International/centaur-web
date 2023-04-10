import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_HOST } from '../../API/constant';
import { useNavigation } from '../../data/Context/NavigationContext';
import ResourceList from '../departments/Resource/ResourceList'
import { BoxLoading } from 'react-loadingg';
import { EmptySearch } from '../EmptyState/EmptySearch';
export const Resource = () => {

    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const { extra } = useNavigation();

    useEffect(() => {
      const searchKeyword = extra.searchKeyword.split(" ").slice(1).join(" ");

      axios
        .get(`${API_HOST}/resource`)
        .then((res) => {
          const filteredResources = res.data.resources.filter((resource) => {
            return resource.resource_name
              .toLowerCase()
              .includes(searchKeyword.toLowerCase());
          });

          setResources(filteredResources);

          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <BoxLoading color="#65FF52" />
    }

    return (
        <ul className='wrapper_publicResource_list'>
            {resources.length > 0 ? resources.map((item, index) => {
                return (
                    <ResourceList key={index} item={item} />
                )
            }) : <EmptySearch />}
        </ul>
    )
}
